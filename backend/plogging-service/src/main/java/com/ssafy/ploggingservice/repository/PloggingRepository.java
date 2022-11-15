package com.ssafy.ploggingservice.repository;

import com.ssafy.ploggingservice.domain.Plogging;
import com.ssafy.ploggingservice.dto.PloggingInterface;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface PloggingRepository extends JpaRepository<Plogging, Long> {

    @Query("select p from Plogging p where p.member.id = :memberId")
    Slice<Plogging> findAllById(UUID memberId, Pageable pageable);

    @Query(value = "SELECT p.plogging_id as ploggingId ,p.start_lat as startLat, p.start_lng as startLng " +
            "FROM plogging p " +
            "WHERE " +
            "(6371*acos(cos(radians(:lat))*cos(radians(p.start_lat))*cos(radians(p.start_lng) " +
            "-radians(:lng))+sin(radians(:lat))*sin(radians(p.start_lat)))) <= 2 " +
            "and p.created_date >= :time"
            , nativeQuery = true)
    List<PloggingInterface> getPloggingLoc(double lat, double lng, LocalDateTime time);

    // 최근 플로깅 리스트 조회
    @Query("select p from Plogging p join fetch p.member order by p.createdDate desc ")
    List<Plogging> findAllWithMemberOrderByCreatedDate();

    // 최근 크루별 플로깅 리스트 조회
    @Query("select p from Plogging p join fetch p.member where p.crew.id = :crewId order by p.createdDate desc ")
    List<Plogging> findCrewPloggingAllWithMemberOrderByCreatedDate(Long crewId);
}